"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

export function BookingCancelAlert({ bookingId }) {

    

    const handleCancelBooking = async () => {

        const {data: tokenData} = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            }
        })

        const data = await res.json();
        console.log(data)

        if (data.deletedCount > 0) {
            window.location.reload(); // পেজ রিফ্রেশ করবে
        }
    }


    return (
        <AlertDialog>
            <Button className="rounded-none border-red-500 text-red-500 hover:text-red-600" variant="outline">
                <TrashBin /> Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete your booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete from <strong>WanderLast</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                Delete Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}