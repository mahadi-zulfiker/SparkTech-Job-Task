"use client";

export function PoliciesSection() {
  const policiesData = [
    {
      title: "Check-in",
      details: (
        <>
          <p className="font-semibold text-gray-900 mb-1">Available 24 hours</p>
          <p>Guests are required to show a photo identification and credit card upon check-in</p>
          <p>You will need to let the property know in advance what time you will arrive.</p>
        </>
      ),
    },
    {
      title: "Check-out",
      details: (
        <>
          <p className="font-semibold text-gray-900">Available 24 hours</p>
        </>
      ),
    },
    {
      title: "Cancellation/ prepayment",
      details: (
        <>
          <p>Cancellation and prepayment policies vary according to accommodation type.</p>
          <p>Please check what conditions may apply to each option when making your selection.</p>
        </>
      ),
    },
    {
      title: "Children and beds",
      details: (
        <>
          <p className="font-semibold text-gray-900 mb-1">Child policies</p>
          <p>Children of any age are welcome.</p>
          <p>Children 12 years and above will be charged as adults at this property.</p>
          <p>To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.</p>
          <p className="font-semibold text-gray-900 mb-1">Cot and extra bed policies</p>
          <p>Cot and extra bed policies are dependent on the option you choose.</p>
          <p>The number of extra beds allowed is dependent on the option you choose.</p>
          <p>Please check your selected option for more information.</p>
          <p>There are no cots available at this property.</p>
          <p>All extra beds are subject to availability.</p>
        </>
      ),
    },
    {
      title: "No age restriction",
      details: (
        <>
          <p className="font-semibold text-gray-900">There is no age requirement for check-in</p>
        </>
      ),
    },
    {
      title: "Pets",
      details: (
        <>
          <p className="font-semibold text-gray-900">Pets are not allowed.</p>
        </>
      ),
    },
    {
      title: "Cash only",
      details: (
        <>
          <p className="font-semibold text-gray-900">This property only accepts cash payments.</p>
        </>
      ),
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
        Policies
      </h2>

      <div className="border border-gray-200 rounded-lg">
        {policiesData.map((policy, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 border-b border-gray-200 last:border-b-0 items-start"
          >
            <div className="md:col-span-1 px-4">
              <h3 className="text-base font-medium text-gray-900">
                {policy.title}
              </h3>
            </div>
            <div className="md:col-span-2 lg:col-span-3 px-4 text-sm text-gray-600">
              {policy.details}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}