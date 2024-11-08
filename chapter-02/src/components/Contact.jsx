const Contact = () => {
  return (
    <div>
      <h1 className="font-bold m-2 p-2 text-2xl">This is the Contact page of this food ordering website</h1>
      <form action="">
        <input type="text" placeholder="name" className="m-2 p-2 border-2 border-black"/>
        <button type="submit" className="m-2 p-2 rounded-lg bg-gray-400 border-black">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
