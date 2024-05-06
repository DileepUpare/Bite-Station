import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";
import {TbZoomReset}  from "react-icons/tb";
import { buttonClick } from "@/Animations";
import { motion } from "framer-motion";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void
  placeHolder: string;
  onReset?: () => void;
  searchQuery: string;
  mobile?: boolean;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery, mobile }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 flex-row border-2 rounded-full p-2 ${form.formState.errors.searchQuery && "border-red-500"
          }`}
      >
        {!mobile && <Search strokeWidth={2.5} size={30} className="ml-1 text-white hidden md:block" />}
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-xl focus-visible:ring-0 text-cyan-600"
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <motion.button {...buttonClick}>
        <Button onClick={handleReset} type="button" variant="outline" className="rounded-full">
        <TbZoomReset />
        </Button>
        </motion.button>

        <motion.button {...buttonClick}>
        <Button type="submit" className="rounded-full bg-white hover:text-white text-black">
          Search
        </Button>
        </motion.button>
      </form>
    </Form>

  )
};

export default SearchBar;
