import InputField from "$components/form/InputFiled";
import { ModalBox } from "$components/modal/intex";
import { useMemoryClick } from "$myhooks";
import { DialogBody, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

export type IEditProps = {
  editHandleOpen: () => void;
  editOpen: boolean;
  editHandleClose: () => void;
};

const Edit: React.FC<IEditProps> = ({
  editHandleOpen,
  editOpen,
  editHandleClose,
}) => {
  const [preview, setPreview] = useMemoryClick("");
  const { control } = useForm({
    mode: "all",
    defaultValues: {
      tutroialName: "",
      file: "",
    },
  });

  console.log(preview);

  return (
    <ModalBox handleOpen={editHandleOpen} open={editOpen} size="xs">
      <DialogBody placeholder={"dashboard-dialogbody"}>
        <p className="text-xl mb-3 text-black">Add New Tutorial</p>
        <p className="mb-3 text-black">
          Make create to Tutorial here. Click save when you're done.
        </p>
        <form>
          <div className="">
            <InputField
              label="Tutroial Name"
              name="tutroialName"
              control={control}
            />
            <div className="grid grid-cols-2 gap-3 mt-5">
              <div>
                <p className="text-sm mb-2">Tutorial Video</p>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="video/*"
                  onChange={(e) => {
                    return new Promise<void>(async (resolve, reject) => {
                      const filePicker = e.target;

                      if (
                        !filePicker ||
                        !filePicker.files ||
                        filePicker.files.length <= 0
                      ) {
                        reject("No file selected.");
                        return;
                      }
                      const myFile = filePicker.files[0];
                      const blob = URL.createObjectURL(myFile);
                      setPreview(blob);
                      resolve();
                    });
                  }}
                  className="text-sm hidden"
                />
                <label
                  htmlFor="file"
                  className="inline-block text-center cursor-pointer bg-[#efefef] w-full rounded-md text-sm py-2 px-3"
                >
                  <span className="">File upload</span>
                </label>
              </div>
              {preview && (
                <div>
                  <video controls width="300" height="300">
                    <source type="video/mp4" src={preview} />
                  </video>
                </div>
              )}
            </div>
          </div>
          <div className=" mt-4">
            <div className="w-full flex justify-center">
              <Button
                onClick={editHandleClose}
                placeholder={"button"}
                className="bg-white text-black capitalize font-[500] mr-3"
              >
                Cancel
              </Button>
              <Button
                placeholder={"button"}
                className="bg-primary capitalize font-[500]"
              >
               Save
              </Button>
            </div>
          </div>
        </form>
      </DialogBody>
    </ModalBox>
  );
};

export default Edit;
