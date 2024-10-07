"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next-app-progress-bar";
import toast from "react-hot-toast";

//Components
import { Input, Textarea, ImageUploader, Checkbox } from "@/Components/UI";

//Input Types
import { CategoryInput } from "@/Utils/input.types";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { GET_CATEGORY, UPDATE_CATEGORY } from "@/Apollo/query/category/category";

interface Props {
    slug: string;
}

const Edit = ({ slug }: Props) => {
    //Initializing Hook
    const router = useRouter();

    //Apollo
    const { data } = useQuery(GET_CATEGORY, { variables: { slug } });
    const [mutate, { loading }] = useMutation(UPDATE_CATEGORY, {
        onCompleted: (data) => {
            toast.success(data.updateCategory.message)
            router.push("/categories")
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getCategories", "getCategory"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<CategoryInput>({
        defaultValues: {
            name: data?.getCategory.name,
            description: data?.getCategory.description || "",
            icon: data?.getCategory.icon || "",
            position: data?.getCategory.position?.toString(),
            is_top: data?.getCategory.is_top,
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<CategoryInput> = (value) => {
        mutate({ variables: { categoryDto: { ...value, position: Number(value.position) }, updateCategoryId: data?.getCategory.id || 0 } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            name: data?.getCategory.name,
            description: data?.getCategory.description || "",
            icon: data?.getCategory.icon || "",
            position: data?.getCategory.position?.toString(),
            is_top: data?.getCategory.is_top,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update category</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Name"
                            id="name"
                            placeholder="Name"
                            {...register("name", { required: "Category Name is required" })}
                            error={errors.name ? true : false}
                            message={errors.name?.message}
                        />
                        <Textarea
                            label="Description"
                            id="description"
                            placeholder="Description"
                            {...register("description")}
                            rows={4}
                        />
                        <Input
                            label="Position"
                            id="position"
                            placeholder="Display position"
                            {...register("position", { required: "Position is required" })}
                            error={errors.position ? true : false}
                            message={errors.position?.message}
                        />
                        <Controller
                            control={control}
                            name="is_top"
                            render={({ field: { onChange, value } }) => (
                                <Checkbox
                                    value={value}
                                    onChange={onChange}
                                    label="Are you want to show on top place"
                                    id="isTopCategory"
                                />
                            )}
                        />
                    </div>
                    <div className="col-span-1">
                        <Controller
                            control={control}
                            name="icon"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Icon Image"
                                    sub="Add or change icon for the category"
                                    width={400}
                                    height={400}
                                    onChange={onChange}
                                    value={value}
                                    folderName="category"
                                    previewClass="w-[40%]"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Category</span>
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            {loading &&
                                <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                            }
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Edit;