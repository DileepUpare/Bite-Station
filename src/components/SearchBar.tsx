import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";

const formSchema = z.object({
    searchQuery: z.string({
        required_error: "Restaurant name is required",
    }),
});


export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm)=> void
  placeHolder: string;
  onReset?: () => void;
};

const SearchBar = ({ onSubmit, onReset, placeHolder }: Props) => {
  const form = useForm<SearchForm>({
      resolver: zodResolver(formSchema),
  });

  const handleReset = () => {
    form.reset({
       searchQuery: "",
    });

    if(onReset){
       onReset(); 
    }
 };

  return(
    <Form {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={`flex items-center flex-1 gap-3 flex-row border-2 rounded-full p-3 mx-3 ${
        form.formState.errors.searchQuery && "border-red-500"
      } bg-transparent`} 
    >
      <Search strokeWidth={2.5} size={30} className="ml-1 text-white hidden md:block" />
      <FormField
        control={form.control}
        name="searchQuery"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormControl>
              <Input
                {...field}
                className="border-none shadow-none text-xl focus-visible:ring-0 bg-transparent text-white" 
                placeholder={placeHolder}
              />
            </FormControl>
          </FormItem>
        )}
      />
  
      {form.formState.isDirty && (
        <Button onClick={handleReset} type="button" variant="outline" className="rounded-full">
          Clear
        </Button>
      )}
  
      <Button type="submit" className="rounded-full bg-white hover:text-white text-black">
        Search
      </Button>
    </form>
  </Form>
  
  )
};

export default SearchBar;