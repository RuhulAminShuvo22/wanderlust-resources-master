import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

const AddDestinationPage = () => {

  // example loading state
  const isPending = false;

  return (
    <div>
      <h2>This is add destination page</h2>

      <form className="p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField name="destinationName" isRequired>
              <Label>Destination Name</Label>
              <Input
                placeholder="Bali Paradise"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Country */}
          <TextField name="country" isRequired>
            <Label>Country</Label>
            <Input
              placeholder="Indonesia"
              className="rounded-2xl"
            />
            <FieldError />
          </TextField>

          {/* Category */}
          <div>
            <Select
              name="category"
              isRequired
              className="w-full"
              placeholder="Select category"
            >
              <Label>Category</Label>

              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Beach" textValue="Beach">
                    Beach
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="Mountain" textValue="Mountain">
                    Mountain
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="City" textValue="City">
                    City
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="Adventure" textValue="Adventure">
                    Adventure
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="Cultural" textValue="Cultural">
                    Cultural
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="Luxury" textValue="Luxury">
                    Luxury
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Price */}
          <TextField name="price" type="number" isRequired>
            <Label>Price (USD)</Label>

            <Input
              type="number"
              placeholder="1299"
              className="rounded-2xl"
            />

            <FieldError />
          </TextField>

          {/* Duration */}
          <TextField name="duration" isRequired>
            <Label>Duration</Label>

            <Input
              placeholder="7 Days / 6 Nights"
              className="rounded-2xl"
            />

            <FieldError />
          </TextField>

          {/* Departure Date */}
          <div className="md:col-span-2">
            <TextField
              name="departureDate"
              type="date"
              isRequired
            >
              <Label>Departure Date</Label>

              <Input
                type="date"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label>Image URL</Label>

              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>

              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-3xl"
              />

              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Button */}
        <Button
          type="submit"
          variant="outline"
          isLoading={isPending}
          className="rounded-none w-full bg-cyan-500 text-white"
        >
          {isPending
            ? "Adding Package..."
            : "Add Travel Package"}
        </Button>
      </form>
    </div>
  );
};

export default AddDestinationPage;