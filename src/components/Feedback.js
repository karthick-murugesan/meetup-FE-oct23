import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Feedback() {
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const data1 = Object.fromEntries(data.entries());
    try {
      //     const data1={
      //     "first_name": "qwe",
      //     "last_name": "uytguy",
      //     "college": "uguyg",
      //     "email": "kjn@gmail.com",
      //     "contact": "8787",
      //     "How satisfied were you with the event?": "on",
      //     "How satisfied were you with the Venue & Ambience?": "on",
      //     "How satisfied were you with the Content?": "on",
      //     "How satisfied were you with the Food & Refeshments?": "on",
      //     "How satisfied were you with the Speakers?": "on",
      //     "about_the_event": "qwe",
      //     "future_meetup_topics": "qwe",
      //     "feedback": "qwe"
      // }
      // console.log(data1)
      const settings = {
        mode: "no-cors",
        headers: {
          // 'Accept': 'application/json',
          // 'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Credentials":"true"
        },

        // body:JSON.stringify(data)
      };
      // axios.post("https://jsonplaceholder.typicode.com/posts");
      axios
        .post("http://127.0.0.1:9001/savedetails", data1, settings)
        .then((response) => console.log(response))
        .catch((error) => console.log("err failed : " + error.message));
    } catch (error) {
      console.error("Error:", error);
    }
    <div
      id="toast-simple"
      class="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
      role="alert"
    >
      <svg
        class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
        />
      </svg>
      <div class="pl-4 text-sm font-normal">Message sent successfully.</div>
    </div>;
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2> */}
          {/* <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p> */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900"></h2>
          <p className="mt-1 text-sm leading-6 text-gray-600"></p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name*
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  required={true}
                  defaultValue={""}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  defaultValue={""}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="college"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                College / Company
              </label>
              <div className="mt-2">
                <textarea
                  id="college"
                  name="college"
                  rows={1}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address*
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required={true}
                  defaultValue={""}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="contact"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contact number *
              </label>
              <div className="mt-2">
                <input
                  id="contact"
                  name="contact"
                  type="number"
                  autoComplete="contact-no"
                  required={true}
                  defaultValue={"1223342"}
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
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            About the event
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'd love to hear the feedback about this event. Your honest
            feedback will help us improve ourselves.
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
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                How satisfied were you with the event?
              </legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">1 = Very dissatisfied   5 = Very satisfied</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Event_Excellent"
                    name="How satisfied were you with the event?"
                    type="radio"
                    value="Event_Excellent"
                    defaultValue={"radio"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Event_Excellent"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Excellent
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Event_Good"
                    name="How satisfied were you with the event?"
                    type="radio"
                    value="Event_Good"
                    defaultValue={"radio"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Event_Good"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Good
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Event_Average"
                    name="How satisfied were you with the event?"
                    type="radio"
                    value="Event_Average"
                    defaultValue={"radio"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Event_Average"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Average
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Event_Bad"
                    name="How satisfied were you with the event?"
                    type="radio"
                    value="Event_Bad"
                    defaultValue={"radio"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Event_Bad"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bad
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Event_Too_bad"
                    name="How satisfied were you with the event?"
                    type="radio"
                    value="Event_Too_bad"
                    defaultValue={"radio"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Event_Too_bad"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Too-bad
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                How satisfied were you with the Venue & Ambience?
              </legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">1 = Very dissatisfied   5 = Very satisfied</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Excellent"
                    name="How satisfied were you with the Venue & Ambience?"
                    type="radio"
                    value="Venue_Excellent"
                    defaultValue={"radio"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Venue_Excellent"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Excellent
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Good"
                    name="How satisfied were you with the Venue & Ambience?"
                    type="radio"
                    value="Venue_Good"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Venue_Good"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Good
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Average"
                    name="How satisfied were you with the Venue & Ambience?"
                    type="radio"
                    value="Venue_Average"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Venue_Average"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Average
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Bad"
                    name="How satisfied were you with the Venue & Ambience?"
                    type="radio"
                    value="Venue_Bad"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Venue_Bad"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bad
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Venue_Too_bad"
                    name="How satisfied were you with the Venue & Ambience?"
                    type="radio"
                    value="Venue_Too_bad"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Venue_Too_bad"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Too-bad
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                How satisfied were you with the Content?
              </legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">1 = Very dissatisfied   5 = Very satisfied</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Content_Excellent"
                    name="How satisfied were you with the Content?"
                    type="radio"
                    value="Content_Excellent"
                    defaultValue={"radio"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Content_Excellent"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Excellent
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Content_Good"
                    name="How satisfied were you with the Content?"
                    type="radio"
                    value="Content_Excellent"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Content_Good"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Good
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Content_Average"
                    name="How satisfied were you with the Content?"
                    type="radio"
                    value="Content_Average"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Content_Average"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Average
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Content_Bad"
                    name="How satisfied were you with the Content?"
                    type="radio"
                    value="Content_Bad"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Content_Bad"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bad
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Content_Too_bad"
                    name="How satisfied were you with the Content?"
                    type="radio"
                    value="Content_Too_bad"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Content_Too_bad"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Too-bad
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                How satisfied were you with the Food & Refeshments?
              </legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">1 = Very dissatisfied   5 = Very satisfied</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Food_Excellent"
                    name="How satisfied were you with the Food & Refeshments?"
                    type="radio"
                    value="Food_Excellent"
                    defaultValue={"radio"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Food_Excellent"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Excellent
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Food_Good"
                    name="How satisfied were you with the Food & Refeshments?"
                    type="radio"
                    value="Food_Good"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Food_Good"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Good
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Food_Average"
                    name="How satisfied were you with the Food & Refeshments?"
                    type="radio"
                    value="Food_Average"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Food_Average"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Average
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Food_Bad"
                    name="How satisfied were you with the Food & Refeshments?"
                    type="radio"
                    value="Food_Bad"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Food_Bad"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bad
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Food_Too_bad"
                    name="How satisfied were you with the Food & Refeshments?"
                    type="radio"
                    value="Food_Too_bad"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Food_Too_bad"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Too-bad
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                How satisfied were you with the Speakers?
              </legend>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">1 = Very dissatisfied   5 = Very satisfied</p> */}
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="Speakers_Excellent"
                    name="How satisfied were you with the Speakers?"
                    type="radio"
                    value="Speakers_Excellent"
                    defaultValue={"radio"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Speakers_Excellent"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Excellent
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Speakers_Good"
                    name="How satisfied were you with the Speakers?"
                    type="radio"
                    value="Speakers_Good"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Speakers_Good"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Good
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Speakers_Average"
                    name="How satisfied were you with the Speakers?"
                    type="radio"
                    value="Speakers_Average"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Speakers_Average"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Average
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Speakers_Bad"
                    name="How satisfied were you with the Speakers?"
                    type="radio"
                    value="Speakers_Bad"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Speakers_Bad"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bad
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Speakers_Too_bad"
                    name="How satisfied were you with the Speakers?"
                    type="radio"
                    value="Speakers_Too_bad"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Speakers_Too_bad"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Too-bad
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="col-span-full">
              <label
                htmlFor="about_the_event"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                What did you like the most in the event?
              </label>
              <div className="mt-2">
                <textarea
                  id="about_the_event"
                  name="about_the_event"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>
            <div className="col-span-full">
              <label
                htmlFor="future_meetup_topics"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Future meetup topics that you would love to attend?
              </label>
              <div className="mt-2">
                <textarea
                  id="future_meetup_topics"
                  name="future_meetup_topics"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>
            <div className="col-span-full">
              <label
                htmlFor="feedback"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                How could we improve ourselves? & Any additional comments
                regarding the sessions or overall agenda?
              </label>
              <div className="mt-2">
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
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
  );
}
