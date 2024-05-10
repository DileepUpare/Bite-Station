import { Link } from "react-router-dom";

const DocumentationPage = ()=> {
  return (
    <div>
        <div className="font-goliBold md:text-7xl text-4xl text-left mt-12">
        Documentation:
        </div>
        <div>
            <h1 className="font-goliSemiBold md:text-4xl text-2xl text-left md:mt-8 mt-3">1. Introduction:</h1>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">Welcome to Bite Station Documentation. This comprehensive guide will help you navigate and utilize all the features of Bite Station, your ultimate destination for online food ordering.</p>
        </div>

        <div>
            <h1 className="font-goliSemiBold md:text-4xl text-2xl text-left md:mt-14 mt-12">2. Getting Started:</h1>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">To begin using Bite Station, simply sign up with your email and create a password. If you already have an account, log in to access your account dashboard.</p>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">Once logged in, you'll be greeted with a user-friendly interface showcasing various restaurants available for ordering.</p>
        </div>

        <div>
            <h1 className="font-goliSemiBold md:text-4xl text-2xl text-left md:mt-14 mt-12">3. Search Functionality:</h1>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">Easily search for restaurants by city, restaurant name, or cuisine type using the search bar located at the top of the page.</p>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">Refine your search using filters such as Cuisines and also sort the results based on delivery price, delivery time or best match.</p>
        </div>

        <div>
            <h1 className="font-goliSemiBold md:text-4xl text-2xl text-left md:mt-14 mt-12">4. Restaurant Details:</h1>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">Click on any restaurant card to view detailed information including menu items, reviews, and delivery options.</p>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">Add items to your cart directly from the restaurant page and proceed to checkout seamlessly.</p>
        </div>

        <div>
            <h1 className="font-goliSemiBold md:text-4xl text-2xl text-left md:mt-14 mt-12">5. Ordering Process:</h1>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">Adding items to your cart is as simple as clicking on the desired menu items and specifying any customization options.</p>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">Once you're ready, proceed to checkout, confirm your delivery details, and select your preferred payment method.</p>
        </div>

        <div>
            <h1 className="font-goliSemiBold md:text-4xl text-2xl text-left md:mt-14 mt-12">6. Order Status:</h1>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">Keep track of your order status in real-time from the Order Status page.</p>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">Receive notifications as your order is confirmed, prepared, and out for delivery.</p>
        </div>

        <div>
            <h1 className="font-goliSemiBold md:text-4xl text-2xl text-left md:mt-14 mt-12">7. Restaurant Management:</h1>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4">Are you a restaurant owner? Manage your orders efficiently from the Restaurant Dashboard. Update order status, manage inventory, and respond to customer inquiries effortlessly.</p>
        </div>

        <div>
            <h1 className="font-goliSemiBold md:text-4xl text-2xl text-left md:mt-14 mt-12">8. FAQs:</h1>
            <p className="font-goliMedium md:text-2xl text-xl text-left md:ml-8 ml-4 mt-4 mb-40">Find answers to common questions and troubleshooting tips in our Frequently Asked Questions section. Still have questions? Feel free to <span className="text-blue-700 cursor-pointer"><Link to="/contact-us">contact</Link></span> our support team for assistance.</p>
        </div>
    </div>
  );
};

export default DocumentationPage;