import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default class cardDrag extends Component {
  render() {
    return (
      <div>
        <DragDropContext onDragEnd={(e)=> {
          console.log({e})
        }} >
          <Droppable droppableId="dp1" >
            <Draggable draggableId="d1" >
              {()=> "111"}
            </Draggable>
            <Draggable draggableId="d2" >
              {()=> "222"}
            </Draggable>
            <Draggable draggableId="d3" >
              {()=> "111"}
            </Draggable>
            {/* <Draggable draggableId="d4" >
              44444
            </Draggable>
            <Draggable draggableId="d5" >
              55555
            </Draggable> */}
          </Droppable>
        </DragDropContext>
      </div>
    )
  }
}
