import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Feedback() {

  async function handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(Object.fromEntries(data.entries()));

    // console.log((event.target.dataset)); // Reference by form input's `name` tag
    // console.log(JSON.stringify(data));
    // console.log((data.get('email'))); // Reference by form input's `name` tag

    try {
      const settings = {
        method: 'POST',
        headers: {
            // Accept: 'application/json',
            'Content-Type': 'application/json',
            
        },
        mode:'no-cors',
        body:JSON.stringify({
          "first_name": "qwe",
          "last_name": "uytguy",
          "College": "uguyg",
          "email": "kjn@gmail.com",
          "contact": "8787",
          "radio_set1": "on",
          "radio_set2": "on",
          "radio_set3": "on",
          "radio_set4": "on",
          "radio_set5": "on",
          "about_the_event": "qwe",
          "Future_meetup_topics": "qwe",
          "feedback": "qwe"
      })
        // data:JSON.stringify(data)
    };
    await fetch('http://127.0.0.1:8002/savedetails',settings)
    .then((response) => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('Authorization failed : ' + error.message));
  }catch (error) {
    console.error('Error:', error);
  }
  }
  
  return (
    <form onSubmit={e=>handleSubmit(e)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2> */}
          {/* <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p> */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900"></h2>
          <p className="mt-1 text-sm leading-6 text-gray-600"></p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="College" className="block text-sm font-medium leading-6 text-gray-900">
                College / Company
              </label>
              <div className="mt-2">
                <textarea
                  id="College"
                  name="College"
                  rows={1}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                Contact number
              </label>
              <div className="mt-2">
                <input
                  id="contact"
                  name="contact"
                  type="number"
                  autoComplete="contact-no"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div> */}

           

            

            

            
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">About the event</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
          We'd love to hear the feedback about this event. Your honest feedback will help us improve ourselves.
          </p>

          <div className="mt-10 space-y-10">
            {/* <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset> */}
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">How satisfied were you with the event?
</legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">1 = Very dissatisfied   5 = Very satisfied</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Excellent"
                    name="radio_set1"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Venue_Excellent" className="block text-sm font-medium leading-6 text-gray-900">
                    Excellent
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Good"
                    name="radio_set1"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Venue_Good" className="block text-sm font-medium leading-6 text-gray-900">
                    Good
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Average"
                    name="radio_set1"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Venue_Average" className="block text-sm font-medium leading-6 text-gray-900">
                    Average
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Bad"
                    name="radio_set1"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Venue_Bad" className="block text-sm font-medium leading-6 text-gray-900">
                    Bad
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Too_bad"
                    name="radio_set1"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Venue_Too_bad" className="block text-sm font-medium leading-6 text-gray-900">
                    Too-bad
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">How satisfied were you with the Venue & Ambience?
</legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">1 = Very dissatisfied   5 = Very satisfied</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Excellent"
                    name="radio_set2"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Venue_Excellent" className="block text-sm font-medium leading-6 text-gray-900">
                    Excellent
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Good"
                    name="radio_set2"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Venue_Good" className="block text-sm font-medium leading-6 text-gray-900">
                    Good
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Average"
                    name="radio_set2"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Venue_Average" className="block text-sm font-medium leading-6 text-gray-900">
                    Average
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Bad"
                    name="radio_set2"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Venue_Bad" className="block text-sm font-medium leading-6 text-gray-900">
                    Bad
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Too_bad"
                    name="radio_set2"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Venue_Too_bad" className="block text-sm font-medium leading-6 text-gray-900">
                    Too-bad
                  </label>
                </div>
              </div>
            </fieldset>
            
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">How satisfied were you with the Content?
</legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">1 = Very dissatisfied   5 = Very satisfied</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Content_Excellent"
                    name="radio_set3"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Content_Excellent" className="block text-sm font-medium leading-6 text-gray-900">
                    Excellent
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Content_Good"
                    name="radio_set3"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Content_Good" className="block text-sm font-medium leading-6 text-gray-900">
                    Good
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Content_Average"
                    name="radio_set3"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Content_Average" className="block text-sm font-medium leading-6 text-gray-900">
                    Average
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Content_Bad"
                    name="radio_set3"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Content_Bad" className="block text-sm font-medium leading-6 text-gray-900">
                    Bad
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Content_Too_bad"
                    name="radio_set3"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Content_Too_bad" className="block text-sm font-medium leading-6 text-gray-900">
                    Too-bad
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">How satisfied were you with the Food & Refeshments?
</legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">1 = Very dissatisfied   5 = Very satisfied</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Food_Excellent"
                    name="radio_set4"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Food_Excellent" className="block text-sm font-medium leading-6 text-gray-900">
                    Excellent
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Food_Good"
                    name="radio_set4"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Food_Good" className="block text-sm font-medium leading-6 text-gray-900">
                    Good
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Food_Average"
                    name="radio_set4"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Food_Average" className="block text-sm font-medium leading-6 text-gray-900">
                    Average
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Food_Bad"
                    name="radio_set4"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Food_Bad" className="block text-sm font-medium leading-6 text-gray-900">
                    Bad
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Food_Too_bad"
                    name="radio_set4"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Food_Too_bad" className="block text-sm font-medium leading-6 text-gray-900">
                    Too-bad
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">How satisfied were you with the Speakers?
</legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">1 = Very dissatisfied   5 = Very satisfied</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Speakers_Excellent"
                    name="radio_set5"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Speakers_Excellent" className="block text-sm font-medium leading-6 text-gray-900">
                    Excellent
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Speakers_Good"
                    name="radio_set5"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Speakers_Good" className="block text-sm font-medium leading-6 text-gray-900">
                    Good
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Speakers_Average"
                    name="radio_set5"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Speakers_Average" className="block text-sm font-medium leading-6 text-gray-900">
                    Average
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Speakers_Bad"
                    name="radio_set5"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Speakers_Bad" className="block text-sm font-medium leading-6 text-gray-900">
                    Bad
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Speakers_Too_bad"
                    name="radio_set5"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Speakers_Too_bad" className="block text-sm font-medium leading-6 text-gray-900">
                    Too-bad
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="col-span-full">
              <label htmlFor="about_the_event" className="block text-sm font-medium leading-6 text-gray-900">
                What did you like the most in the event?
              </label>
              <div className="mt-2">
                <textarea
                  id="about_the_event"
                  name="about_the_event"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>
            <div className="col-span-full">
              <label htmlFor="Future_meetup_topics" className="block text-sm font-medium leading-6 text-gray-900">
              Future meetup topics that you would love to attend?
              </label>
              <div className="mt-2">
                <textarea
                  id="Future_meetup_topics"
                  name="Future_meetup_topics"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>
            <div className="col-span-full">
              <label htmlFor="feedback" className="block text-sm font-medium leading-6 text-gray-900">
              How could we improve ourselves? & Any additional comments regarding the sessions or overall agenda?
              </label>
              <div className="mt-2">
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}