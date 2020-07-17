# 05 Third-Party APIs: Work Day Scheduler

## Dayliy Scheduler explan

* This is a sample daily planner
- The planer start a day from 6:00 AM to 8:00 PM.
- The planner display `timeblocks` three different colors hourly (past, present, future).
- When you open the daily planner, then the `header` displays the calendar (MM/DD/YYYY/T).
- When you click the `timeblocks`, then you can input the events.
- When you click the `save` button, then the event will save to the browser.
- When you click the `clear all` button, then remove all events in the browser.

## What I did

1. HTML
    * Add the new timeblocks and `clear all` button
2. CSS
    * Add the new `font-family` with [`Google Font`](https://fonts.google.com/)
    * Change the background colors
    * Adjust the `clear all` button position
3. Javascript
    * `var` Give element variables
    * `array` to contain all the hours
    * `moment()` to display the date and carent time
    * `$().on("click")`:
        - add event listener by [`jQuery`] for `button.saveBtn` to set up local storage
        - add event listener by [`jQuery`] for `button.clean` to remove all events
    * `function`:
        - Remove hash tag in `array`
        - Get data from `local storage`
        - Track `hour` and display different colors
