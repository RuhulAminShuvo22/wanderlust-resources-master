// "use client";
// import {TrashBin} from '@gravity-ui/icons';
// import {AlertDialog, Button} from "@heroui/react";
// import { redirect } from 'next/navigation';

// export function DeleteAlert({destination}) {

//     const {_id ,destinationName} = destination;

//     const handleDelete = async()=> {
//         const res = await fetch(`http://localhost:5000/destination/${_id}`,
//             {
//                 method: "Delete" ,
//                 headers: {
//                     "content-type": "application/json",
//                 }
//             })
//         const data = await res.json()
//         redirect('/destinations')
//         console.log(data)
//     }

//   return (
//     <AlertDialog>
//       <Button className={"text-red-500 rounded-none"}  variant="outline"><TrashBin></TrashBin> Delete </Button>
//       <AlertDialog.Backdrop>
//         <AlertDialog.Container>
//           <AlertDialog.Dialog className="sm:max-w-[400px]">
//             <AlertDialog.CloseTrigger />
//             <AlertDialog.Header>
//               <AlertDialog.Icon status="danger" />
//               <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
//             </AlertDialog.Header>
//             <AlertDialog.Body>
//               <p>
//                 This will permanently delete <strong> {destinationName} </strong> and all of its
//                 data. This action cannot be undone.
//               </p>
//             </AlertDialog.Body>
//             <AlertDialog.Footer>
//               <Button slot="close" variant="tertiary">
//                 Cancel
//               </Button>
//               <Button onClick={handleDelete} slot="close" variant="danger">
//                 Delete 
//               </Button>
//             </AlertDialog.Footer>
//           </AlertDialog.Dialog>
//         </AlertDialog.Container>
//       </AlertDialog.Backdrop>
//     </AlertDialog>
//   );
// }

"use client";
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from 'next/navigation'; // redirect এর বদলে useRouter ইমপোর্ট করুন
import { authClient } from "@/lib/auth-client"; // Better Auth ক্লায়েন্ট যুক্ত করা হলো

export function DeleteAlert({ destination }) {
  const router = useRouter(); // useRouter হুক ডিক্লেয়ার করুন
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const { _id, destinationName } = destination;

  const handleDelete = async () => {
    // ১. ইউজার লগইন না থাকলে প্রটেক্ট করবে
    if (!user) {
      alert("Please log in first to delete this destination.");
      return;
    }

    try {
      // ২. Better Auth থেকে টোকেন নেওয়া হলো
      const { data: tokenData } = await authClient.token();

      // ৩. হেডারে Bearer Token পাস করে সুরক্ষিত DELETE রিকোয়েস্ট পাঠানো হলো
      const res = await fetch(`http://localhost:5000/destination/${_id}`, {
        method: "DELETE", // standard uppercase convention
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${tokenData?.token}` // টোকেন পাঠানো হলো
        }
      });

      const data = await res.json();
      console.log(data);

      if (data.deletedCount > 0) {
        alert("Destination deleted successfully!");
        // ৪. ক্লায়েন্ট সাইডে নিরাপদে রিডাইরেক্ট করুন
        router.push('/destinations');
        router.refresh(); // পেজের ক্যাশ রিমুভ করার জন্য
      } else {
        alert("Failed to delete destination.");
      }
    } catch (error) {
      console.error("Delete Request Error:", error);
      alert("Connection error to server.");
    }
  };

  return (
    <AlertDialog>
      <Button className={"text-red-500 rounded-none"} variant="outline">
        <TrashBin /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong> {destinationName} </strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
