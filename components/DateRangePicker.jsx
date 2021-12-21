import { useState } from 'react';
import DayPickerInput from '../node_modules/react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const parseDate = (str, format, locale) => { 
  const parsed = dateFnsParse(str, format, new Date(), { locale })

  return DateUtils.isDate(parsed) ? parsed : null;
}

const formatDate = (date, format, locale) => dateFnsFormat(date, format, { locale });

const format = 'MMM dd yyyy';

const numberOfNightsBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let dayCount = 0;

  while (end > start) {
    dayCount++;
    start.setDate(start.getDate() + 1);
  }
}

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);

  return (
    <div className="date-range-picker-container">
      <div>
        <label>From:</label>
        <DayPickerInput
          formatDate={formatDate}
          format={format}
          value={startDate}
          parseDate={parseDate}
          placeholder={`${dateFnsFormat(new Date(), format)}`}
          dayPickerProps={{
            modifiers: {
              disabled: {
                before: new Date()
              }
            }
          }}
          onDayChange={(day) => {
            setStartDate(day);
            const newEndDate = new Date(day);
            newEndDate.setDate(newEndDate.getDate() + 1);
            setEndDate(newEndDate);
          }}
        />
      </div>
      <div>
        <label>To:</label>
        <DayPickerInput
          formatDate={formatDate}
          format={format}
          value={endDate}
          parseDate={parseDate}
          placeholder={`${dateFnsFormat(tomorrow, format)}`}
          dayPickerProps={{
            modifiers: {
              disabled: [
                startDate,
                {
                  before: startDate
                }
              ]
            }
          }}
          onDayChange={(day) => {
            setEndDate(day)
          }}
        />
      </div>

      <style jsx>
        {`
          .date-range-picker-container div {
            display: grid;
            grid-template-columns: 30% 70%;
            padding: 10px;
          }
          label {
            padding-top: 10px;
          }
        `}
      </style>
      <style jsx global>
        {`
          .DayPickerInput input {
            width: 120px;
            padding: 10px;
            font-size: 16px;
          }
        `}
      </style>
    </div>
  )
}
