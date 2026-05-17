
"use client"
import { Button, Card } from "@heroui/react";
import { DateField, Label } from "@heroui/react";

const BookingCard = ({ destination }) => {

    const { price } = destination;

    return (
        <Card className="rounded-none border mt-5">
            <p className="text-sm text-muted">Starting from</p>
            <h2 className="text-3xl font-bold text-cyan-400">${price}</h2>
            <p className="text-sm text-muted">per person</p>

            <DateField className="w-[256px]" name="date">
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>

            <Button className={"w-full rounded-none bg-cyan-500"}>Book Now</Button>

            {/* Features List */}
            <div className="space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Free cancellation up to 7 days</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Travel insurance included</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>24/7 customer support</span>
                </div>
            </div>

        </Card>
    );
};

export default BookingCard;
