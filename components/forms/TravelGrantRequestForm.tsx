import { motion } from "framer-motion";

export default function TravelGrantRequestForm() {
  return (
    <div>
      <form
        name="travel-grant-request-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="grid grid-cols-1 gap-6"
        action="/contact-us?form_completed=true"
      >
        <input
          type="hidden"
          name="form-name"
          value="travel-grant-request-form"
        />
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
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="block text-base font-medium leading-6 text-horizon-grey-800"
              >
                Phone number
              </label>
              <span
                className="text-sm leading-6 text-gray-500"
                id="phone-optional"
              >
                Optional
              </span>
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                className="block w-full rounded-md border-0 py-1.5 pl-16 text-horizon-grey-800 ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                placeholder="+1 (555) 987-6543"
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
            htmlFor="event-name"
            className="block text-base font-medium leading-6 text-horizon-grey-800"
          >
            Event you&apos;re applying for
            <span className="text-horizon-pink"> *</span>
          </label>
          <div className="mt-2">
            <select
              id="event-name"
              name="event-name"
              autoComplete="event-name"
              className="block w-full rounded-md border-0 py-1.5 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
            >
              <option>HackIowaState v2</option>
              <option>DataISU v1</option>
              <option>BuildDSM v1</option>
              <option>HackIowaState v3</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <label
              htmlFor="travel-costs"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Estimated Travel Costs
              <span className="text-horizon-pink"> *</span>
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-horizon-grey-600 sm:text-xs">$</span>
              </div>
              <input
                type="text"
                name="travel-costs"
                id="travel-costs"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
                aria-describedby="price-currency"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span
                  className="text-horizon-grey-600 sm:text-sm"
                  id="price-currency"
                >
                  USD
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="paid-costs"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              How much can you pay?
              <span className="text-horizon-pink"> *</span>
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-horizon-grey-600 sm:text-xs">$</span>
              </div>
              <input
                type="text"
                name="paid-costs"
                id="paid-costs"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
                aria-describedby="price-currency"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span
                  className="text-horizon-grey-600 sm:text-sm"
                  id="price-currency"
                >
                  USD
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-base leading-6 text-horizon-grey-800"
          >
            Describe your travel costs
            <span className="text-horizon-pink"> *</span>
          </label>
          <div className="mt-2.5">
            <textarea
              name="description"
              id="description"
              rows={3}
              placeholder="I will be spending money on..."
              className="block w-full rounded-md border-0 px-3.5 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
              defaultValue={""}
              required
              aria-required="true"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="reason"
            className="block text-base leading-6 text-horizon-grey-800"
          >
            Describe why you need a travel grant?
            <span className="text-horizon-pink"> *</span>
          </label>
          <div className="mt-2.5">
            <textarea
              name="reason"
              id="reason"
              rows={4}
              placeholder="The reason I am applying for a travel grant is..."
              className="block w-full rounded-md border-0 px-3.5 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
              defaultValue={""}
              required
              aria-required="true"
            />
          </div>
        </div>
        <div className="flex justify-start items-center">
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
