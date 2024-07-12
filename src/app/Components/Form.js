// components/Form.js
const Form = () => {
  return (
    <div className={`p-4`}>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Your email id
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium">
            Your mobile number
          </label>
          <input
            type="tel"
            id="mobile"
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            How can we help?
          </label>
          <textarea
            id="message"
            className="mt-1 block w-full border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
