import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Datepicker from "tailwind-datepicker-react";

const BookTable = () => {
  const options = {
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    maxDate: new Date("2030-01-01"),
    minDate: new Date(),
    theme: {
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-gray-200",
      input: "bg-black text-white",
      inputIcon: "text-white",
      selected: "",
    },
    icons: {
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  };

  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    setDate(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  const [person, setPerson] = useState("1-Person");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    toast.success("Table Booked Successfully");

    return navigate("/#home");
  };

  return (
    <section>
      <div className="container m-auto max-w-2xl py-7">
        <div className="px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Book a Table
            </h2>

            <div className="mb-4">
              <label htmlFor="person" className="block font-bold mb-2">
                No. of Persons
              </label>
              <select
                id="person"
                name="person"
                className="bg-black border rounded w-full py-2 px-3"
                required
                value={person}
                onChange={(e) => setPerson(e.target.value)}
              >
                <option value="1-Person">1 Person</option>
                <option value="2-Persons">2 Persons</option>
                <option value="3-Persons">3 Persons</option>
                <option value="4-Persons">More than 4 Persons</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block font-bold mb-2">
                Select Date
              </label>
              <Datepicker
                id="date"
                options={options}
                onChange={handleChange}
                show={show}
                setShow={handleClose}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block font-bold mb-2">
                Select Time
              </label>
              <select
                id="time"
                name="time"
                className="bg-black border rounded w-full py-2 px-3"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="12-PM">12 PM</option>
                <option value="1-PM">1 PM</option>
                <option value="2-PM">2 PM</option>
                <option value="3-PM">3 PM</option>
                <option value="4-PM">4 PM</option>
                <option value="5-PM">5 PM</option>
                <option value="6-PM">6 PM</option>
                <option value="7-PM">7 PM</option>
                <option value="8-PM">8 PM</option>
              </select>
            </div>
            <div>
              <button
                className="bg-indigo-800 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Book Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default BookTable;
