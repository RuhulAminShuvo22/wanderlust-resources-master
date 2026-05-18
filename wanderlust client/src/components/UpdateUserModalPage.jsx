'use client'

import {
    Button,
    Input,
    Modal,
    useOverlayState
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export function UpdateUserModalPage() {
    // HeroUI v3 এর অফিশিয়াল মোডাল স্টেট হুক
    const state = useOverlayState();
    const [name, setName] = useState("");

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleUpdate = async () => {
        if (!name.trim()) return;
        try {
            console.log("Updating name to:", name);
            // এখানে আপনার ব্যাকএন্ড বা ডেটাবেজ আপডেট লজিক বসাতে পারেন
            state.close(); // সফলভাবে আপডেট শেষে মোডাল বন্ধ হবে
        } catch (error) {
            console.error("Update failed:", error);
        }
    };

    return (
        <>
            {/* মোডাল ওপেন করার বাটন */}
            <Button
                onPress={state.open}
                className="text-white font-semibold shadow-lg px-8 rounded-xl bg-sky-500 hover:bg-sky-600 transition-colors"
            >
                Update Profile
            </Button>

            {/* HeroUI v3 এর সঠিক মোডাল স্ট্রাকচার */}
            <Modal isOpen={state.isOpen} onOpenChange={state.setIsOpen}>
                <Modal.Backdrop />
                <Modal.Container>
                    <Modal.Dialog>
                        {({ close }) => (
                            <>
                                {/* মোডাল হেডার */}
                                <Modal.Heading className="text-xl font-bold text-gray-800">
                                    Update Profile Info
                                </Modal.Heading>

                                {/* মোডাল বডি */}
                                <div className="flex flex-col gap-4 my-6">
                                    <Input
                                        label="Full Name"
                                        placeholder="Enter your new name"
                                        defaultValue={user?.name || ""}
                                        onChange={(e) => setName(e.target.value)}
                                        variant="bordered"
                                        className="max-w-full"
                                    />
                                </div>

                                {/* মোডাল ফুটার */}
                                <div className="flex justify-end gap-3">
                                    <Button
                                        variant="flat"
                                        color="danger"
                                        onPress={close}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        className="text-white bg-sky-500 hover:bg-sky-600"
                                        onPress={handleUpdate}
                                    >
                                        Save Changes
                                    </Button>
                                </div>
                            </>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal>
        </>
    );
}
