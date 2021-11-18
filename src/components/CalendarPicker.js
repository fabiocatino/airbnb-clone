import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';

const CalendarPicker = () => {
	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection',
		},
	]);

	return (
		<div className="bg-white w-[800px] rounded-lg flex justify-center">
			<DateRangePicker
				onChange={(item) => setState([item.selection])}
				showSelectionPreview={true}
				moveRangeOnFirstSelection={false}
				months={2}
				ranges={state}
				direction="horizontal"
				rangeColors={['#ff385c']}
			/>
		</div>
	);
};

export default CalendarPicker;
