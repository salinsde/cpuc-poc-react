import styled from '@emotion/styled';
import { Calendar as ReactCalendar } from 'react-calendar';

const Calendar = styled(ReactCalendar)`
    .react-calendar,
    .react-calendar *,
    .react-calendar *:before,
    .react-calendar *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .react-calendar button {
        margin: 0;
        border: 0;
        outline: none;
    }

    .react-calendar button:enabled:hover {
        cursor: pointer;
    }

    .react-calendar__navigation {
        display: flex;
        button {
            padding: 0;
        }
    }

    .react-calendar__navigation button {
        min-width: 44px;
        background: none;
    }

    .react-calendar__navigation button:disabled {
        background-color: #f0f0f0;
    }

    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
        background-color: #e6e6e6;
    }

    .react-calendar__month-view__weekdays {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.75em;
    }

    .react-calendar__month-view__weekdays__weekday {
        padding: 0.5em;
    }

    .react-calendar__month-view__weekNumbers .react-calendar__tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75em;
        font-weight: bold;
    }

    .react-calendar__month-view__days__day--weekend {
        color: #d10000;
    }

    .react-calendar__year-view .react-calendar__tile,
    .react-calendar__decade-view .react-calendar__tile,
    .react-calendar__century-view .react-calendar__tile {
        padding: 2em 0.5em;
    }

    .react-calendar__tile {
        max-width: 100%;
        padding: 10px 6.6667px;
        background: none;
        text-align: center;
        line-height: 16px;
    }

    .react-calendar__tile:disabled {
        background-color: #f0f0f0;
    }

    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        background-color: #e6e6e6;
    }

    .react-calendar__tile--hasActive {
        background: #76baff;
    }

    .react-calendar__tile--hasActive:enabled:hover,
    .react-calendar__tile--hasActive:enabled:focus {
        background: #a9d4ff;
    }

    .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: #e6e6e6;
    }

    /****************** Overrides ******************/

    .react-calendar {
        color: #222;
        max-width: 100px;
        width: 100px;
    }
    .react-calendar__navigation button {
        color: #046b99;
        min-width: 44px;
        background: none;
        font-size: 16px;
    }
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
        background-color: #f8f8fa;
    }
    .react-calendar__navigation button[disabled] {
        background-color: #f0f0f0;
    }
    abbr[title] {
        text-decoration: none;
    }

    .react-calendar__tile {
        color: #555;
        transition: none;
    }
    .react-calendar__tile:hover {
        border: 0;
        transition: none;
    }

    .react-calendar__tile--now {
        border-color: #046b99;
        border-radius: 6px;
        font-weight: bold;
        color: #046b99;
    }
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        font-weight: bold;
        transition: none;
    }
    .react-calendar__tile--hasActive:enabled:hover,
    .react-calendar__tile--hasActive:enabled:focus {
        background: #f8f8fa;
    }
    .react-calendar__tile--active {
        background: #046b99;
        border-radius: 6px;
        font-weight: bold;
        color: #fff;
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        color: #555;
        background: #046b99;
        transition: none;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
        color: #757575;
        background: #cacaca;
        border-radius: 0;
    }
`;

export default Calendar;
