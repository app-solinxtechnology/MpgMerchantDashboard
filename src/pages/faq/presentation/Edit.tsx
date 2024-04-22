import { createFaq } from "#Services";
import lazyToast from "$components/alert";
import InputField from "$components/form/InputFiled";
import { ModalBox } from "$components/modal/intex";
import { DialogBody, Button } from "@material-tailwind/react";
import { useRequest } from "ahooks";
import { FieldValues, useForm } from "react-hook-form";
import { errorMessageResolver } from "../../../utils";
import z from "zod";

export type IEditProps = {
  editHandleOpen: () => void;
  editOpen: boolean;
  editHandleClose: () => void;
};

const createFaQschema = z.object({
  questionEn: z.string().min(1, { message: "question en is required" }),
  questionMm: z.string().min(1, { message: "question mm is required" }),
  answerMm: z.string().min(1, { message: "answer mm is required" }),
  answerEn: z.string().min(1, { message: "answer en is required" }),
});

type createFaQschema = z.infer<typeof createFaQschema>;

const Edit: React.FC<IEditProps> = ({ editHandleOpen, editOpen, editHandleClose }) => {
  const { loading, runAsync } = useRequest(createFaq, {
    manual: true,
  });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createFaQschema>({
    mode: "all",
    defaultValues: {
      questionEn: "",
      questionMm: "",
      answerMm: "",
      answerEn: "",
    },
  });

  const onSubmitHandler = (_data: FieldValues) => {
    lazyToast(
      runAsync({
        answer_en: _data.answerEn,
        answer_mm: _data.answerMm,
        question_en: _data.questionEn,
        question_mm: _data.questionMm,
        status: "active",
      }),
      {
        loading: "verifying",
        success: (res) => {
          localStorage.setItem("adminToken", res.data.data.accessToken);

          //@ts-ignore
          return res?.data?.message;
        },
        error: (err) => errorMessageResolver(err),
      }
    );
  };

  return (
    <ModalBox handleOpen={editHandleOpen} open={editOpen} size="xs">
      <DialogBody placeholder={"dashboard-dialogbody"}>
        <p className="text-xl mb-3 text-black">Question and Answer</p>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="">
            <InputField
              message={errors.questionMm?.message}
              className="mb-3"
              label="Question {Myanmar}"
              name="questionMm"
              control={control}
            />
            <InputField
              message={errors.questionEn?.message}
              className="mb-3"
              label="Question (English)"
              name="questionEn"
              control={control}
            />
           <div className="grow mb-3">
              <p className={`text-sm mb-1 ${errors.answerMm?.message && "text-red-500"}`}>{"Answer (Myanmar)"}</p>
              <div
                className={`h-[100px] px-3 py-1 rounded-md bg-[#efefef] ${
                  errors.answerMm && "text-red-500 border border-red-600"
                }`}
              >
                <textarea
                  {...register("answerMm")}
                  className="h-full outline-none bg-transparent w-full"
                ></textarea>
              </div>
              {errors.answerMm?.message && (
                <p className="text-xs  text-red-500">
                  {errors.answerMm?.message}
                </p>
              )}
            </div>
            <div className="grow mb-3">
              <p className={`text-sm mb-1 ${errors.answerEn?.message && "text-red-500"}`}>{"Answer (English)"}</p>
              <div
                className={`h-[100px] px-3 py-1 rounded-md bg-[#efefef] ${
                  errors.answerEn && "text-red-500 border border-red-600"
                }`}
              >
                <textarea
                  {...register("answerEn")}
                  className="h-full outline-none bg-transparent w-full"
                ></textarea>
              </div>
              {errors.answerEn?.message && (
                <p className="text-xs  text-red-500">
                  {errors.answerEn?.message}
                </p>
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
                loading={loading}
                disabled={loading}
                type="submit"
                placeholder={"button"}
                className="bg-primary capitalize font-[500]"
              >
                Save{" "}
              </Button>
            </div>
          </div>
        </form>
      </DialogBody>
    </ModalBox>
  );
};

export default Edit;
