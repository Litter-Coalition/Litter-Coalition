import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const MapEventCreate = (props) => {
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="startingPoint">Starting Point</Label>
          <Input
            type="text"
            name="startingPoint"
            id="startingPoint"
            placeholder="Starting Point"
          />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="adoptedBlocks">Choose from Adopted Blocks</Label>
          <Input type="select" name="adoptedBlocks" id="adoptedBlocks">
            <option>(Test)Dummy Data</option>
            <option>(Test) Proud Astorian</option>
            <option>(Test) Anti-litter Group</option>
            <option>(Test) Hell's Kitchen Team</option>
            <option>(Test) Poop</option>
          </Input>
        </FormGroup>
      </Form>
    </>
  );
};

export default MapEventCreate;
