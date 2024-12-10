import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { GeneralInfoValues, generateformSchema } from '../../../lib/validation';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

const GeneralInfoForm = () => {
    const form = useForm<GeneralInfoValues>({
        resolver: zodResolver(generateformSchema),
        defaultValues: {
            title: "",
            description: ""
        },
    });
    return (
        <div className="mx-auto max-w-xl space-y-6">
            <div className="space-y-1.5 text-center">
                <h2 className="text-2xl font-semi-bold">General Info</h2>
                <p className="text-sm text-muted-foreground">This would not show on your resume</p>
            </div>
            <Form {...form}>
                <form className="space-y-3">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project name</FormLabel>
                                <FormControl>
                                    <Input placeholder="My resume" {...field} autoFocus/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                        <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="A professional resume" {...field}/>
                                </FormControl>
                                <FormDescription>
                                    Describe the use of your resume
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        </div>
    )
}

export default GeneralInfoForm
