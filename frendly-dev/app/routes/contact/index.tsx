import type { Route } from "./+types";
import { Form } from "react-router";

export async function action({ request }: Route.ActionArgs){
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const data = { name, email, subject, message };
    // Here you would typically handle the form submission, e.g., save to a database or send an email.
    console.log("Form submitted:", data);

    const errors:Record<string, string> = {};
    if (!name) errors.name = "Name is required";
    if (!subject) errors.subject = "Subject is required";
    if (!message) errors.message = "Message is required";
    if (!email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid";
    }

    if (Object.keys(errors).length > 0) {
        return { errors, data };
    }

    // could run database operations here

    // For now, we just return a success response.
    return { message: "Form submitted successfully!", data };
}

const ContactPage = ({ actionData }:Route.ComponentProps) => {
    const errors = actionData?.errors || {};
    return (
        <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
            <h2 className='text-3xl font-bold text-blue-500 mb-8 text-center'>Contact me</h2>
            {
                actionData?.message ? (
                    <p className='mb-6 p-4 bg-green-700 text-green-100 text-center rounded-lg border boarder-green-500 shadow-md'>
                        {actionData.message}
                    </p>
                ) : null
            }
            <form className='space-y-6' method="post">
                <div>
                    <label htmlFor="name" className='block text-sm font-medium text-gray-300'>Name</label>
                    <input type="text" id="name" name="name" className='mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500' required />
                    {errors.name && <p className='mt-2 text-sm text-red-500'>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-300'>Email</label>
                    <input type="email" id="email" name="email" className='mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500' required />
                    {errors.email && <p className='mt-2 text-sm text-red-500'>{errors.email}</p>}   
                </div>
                <div>
                    <label htmlFor="subject" className='block text-sm font-medium text-gray-300'>Subject</label>
                    <input type="text" id="subject" name="subject" className='mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500' required />
                    {errors.subject && <p className='mt-2 text-sm text-red-500'>{errors.subject}</p>}
                </div>
                <div>
                    <label htmlFor="message" className='block text-sm font-medium text-gray-300'>Message</label>
                    <textarea id="message" name="message" rows={4} className='mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500' required></textarea>
                    {errors.message && <p className='mt-2 text-sm text-red-500'>{errors.message}</p>}
                </div>
                <button type="submit" className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactPage;