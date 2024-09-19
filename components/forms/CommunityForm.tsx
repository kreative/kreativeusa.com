import { motion } from "framer-motion";

export default function CommunityForm() {
  return (
    <div>
      <form
        name="community-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="grid grid-cols-1 gap-6"
        action="/contact-us?form_completed=true"
      >
        <input type="hidden" name="form-name" value="community-form" />
        <p className="hidden">
          <label id="contact-form-bot-label">
            Dont fill this out if youre human:{" "}
            <input name="bot-field" aria-labelledby="contact-form-bot-label" />
          </label>
        </p>
        <div>
          <label
            htmlFor="name"
            className="block text-base font-medium leading-6 text-horizon-grey-800"
          >
            Full name<span className="text-horizon-pink"> *</span>
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-1.5 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
              placeholder="Richard Branson"
              required
              aria-required="true"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <label
              htmlFor="email"
              className="block text-base font-medium leading-6 text-horizon-grey-800"
            >
              Email<span className="text-horizon-pink"> *</span>
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                placeholder="you@example.com"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="discord"
              className="block text-base font-medium leading-6 text-horizon-grey-800"
            >
              Discord username<span className="text-horizon-pink"> *</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="discord"
                id="discord"
                className="block w-full rounded-md border-0 py-1.5 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                placeholder="SomethingCool#1234"
                required
                aria-required="true"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <label
              htmlFor="age"
              className="block text-base font-medium leading-6 text-horizon-grey-800"
            >
              Age<span className="text-horizon-pink"> *</span>
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="age"
                id="age"
                className="block w-full rounded-md border-0 py-1.5 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                placeholder="21"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="school-type"
              className="block text-base font-medium leading-6 text-horizon-grey-800"
            >
              School type<span className="text-horizon-pink"> *</span>
            </label>
            <div className="mt-2">
              <select
                id="school-type"
                name="school-type"
                autoComplete="school-type"
                className="block w-full rounded-md border-0 py-1.5 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
              >
                <option>College / University</option>
                <option>High School</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="school-name"
            className="block text-base font-medium leading-6 text-horizon-grey-800"
          >
            School Name<span className="text-horizon-pink"> *</span>
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="school-name"
              id="school-name"
              className="block w-full rounded-md border-0 py-1.5 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
              placeholder="Kreative State University"
              required
              aria-required="true"
            />
          </div>
          <p
            className="mt-2 text-sm text-horizon-grey-600"
            id="school-name-description"
          >
            Please use the full school name (no abbreviations).
          </p>
        </div>
        <div>
          <label
            htmlFor="reason"
            className="block text-base leading-6 text-horizon-grey-800"
          >
            What interests you about Kreative Horizon?
            <span className="text-horizon-pink"> *</span>
          </label>
          <div className="mt-2.5">
            <textarea
              name="reason"
              id="reason"
              rows={3}
              placeholder="The reason I am applying for a travel grant is..."
              className="block w-full rounded-md border-0 px-3.5 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
              defaultValue={""}
              required
              aria-required="true"
            />
          </div>
        </div>
        <div className="flex justify-end items-center">
          <motion.div
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <button
              type="submit"
              className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-gradient-to-r from-horizon-orange to-horizon-pink text-white shadow-lg"
            >
              Submit now
            </button>
          </motion.div>
        </div>
      </form>
    </div>
  );
}
