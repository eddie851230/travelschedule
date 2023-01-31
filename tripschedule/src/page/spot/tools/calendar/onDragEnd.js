import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const initialDays = [
    {
        id: 'day-1',
        name: 'Monday',
        events: [
            { id: 'event-1', name: 'Meeting', duration: 60 },
            { id: 'event-2', name: 'Lunch', duration: 30 },
        ],
    },
    {
        id: 'day-2',
        name: 'Tuesday',
        events: [
            { id: 'event-3', name: 'Gym', duration: 60 },
        ],
    },
    // ...
];

function Calendar() {
    const [days, setDays] = useState(initialDays);

    function onDragEnd(result) {
        // If the item is dropped outside of a droppable area
        if (!result.destination) {
            return;
        }
        // If the item is dropped in the same place as it was picked up from
        if (result.destination.droppableId === result.source.droppableId && result.destination.index === result.source.index) {
            return;
        }

        const newDays = [...days];
        const sourceDay = newDays.find(d => d.id === result.source.droppableId);
        const destinationDay = newDays.find(d => d.id === result.destination.droppableId);
        // Remove event from source
        const [removedEvent] = sourceDay.events.splice(result.source.index, 1);
        // Insert event to destination
        destinationDay.events.splice(result.destination.index, 0, removedEvent);
        setDays(newDays);
    }

    return (
        <div>
            {days.map(day => (
                <div key={day.id}>
                    <h2>{day.name}</h2>
                    <Droppable droppableId={day.id}>
                        {provided => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                onDragEnd={onDragEnd}
                            >
                                {day.events.map((event, index) => (
                                    <Draggable key={event.id} draggableId={event.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                {event.name} ({event.duration} minutes)
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            ))}
        </div>
    );
}

export default Calendar;
