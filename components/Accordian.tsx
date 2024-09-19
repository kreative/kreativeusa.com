import { Disclosure } from "@headlessui/react";
import { Minus, Plus } from "@phosphor-icons/react";
import FAQ from "@/types/FAQ";

export default function Accordian({ faqs }: { faqs: FAQ[] }) {
  return (
    <div>
      <dl className="space-y-3 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-3 -mt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-lg font-bold text-horizon-grey-700 leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <Minus size={24} aria-hidden="true" />
                      ) : (
                        <Plus size={24} aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-lg leading-7 text-horizon-grey-600">
                    <span>{faq.answer}</span>
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
}
