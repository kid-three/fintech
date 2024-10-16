import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RoundBtn from "./RoundButton";
import * as DropdownMenu from "zeego/dropdown-menu";

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <RoundBtn icon={"ellipsis-horizontal"} text="More" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <Text>Profile</Text>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Text>Settings</Text>
        </DropdownMenu.Item>
        <DropdownMenu.Item }>
          <Text>Logout</Text>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
