
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Contact from "../components/Contact";
import Message from "../components/Message";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>

      {/* PURPLE HEADER */}

      <View style={styles.header}>

        <View style={styles.headerTop}>

          <View>
            <Text style={styles.greeting}>
              Hi, Arip!
            </Text>

            <Text style={styles.received}>
              You Received
            </Text>

            <Text style={styles.count}>
              48 Messages
            </Text>
          </View>

          <Pressable
            style={({ hovered, pressed }) => [
              styles.menuButton,
              (hovered || pressed) && styles.buttonHover,
            ]}
          >
            <Ionicons
              name="grid"
              size={25}
              color="#FFFFFF"
            />
          </Pressable>

        </View>

        <Text style={styles.contactHeading}>
          Contact List
        </Text>

        {/* HORIZONTAL CONTACT SCROLL */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contacts}
        >

          <Contact
            name="Phillip"
            image="https://i.pravatar.cc/150?img=20"
            online={true}
          />

          <Contact
            name="Alfredo"
            image="https://i.pravatar.cc/150?img=21"
            online={true}
          />

          <Contact
            name="Jaylon"
            image="https://i.pravatar.cc/150?img=22"
            online={true}
          />

          <Contact
            name="Tatiana"
            image="https://i.pravatar.cc/150?img=23"
            online={false}
          />

          <Contact
            name="Terry"
            image="https://i.pravatar.cc/150?img=24"
            online={false}
          />

        </ScrollView>

      </View>

      {/* WHITE MESSAGE PANEL */}

      <View style={styles.panel}>

        {/* SEARCH AND FILTERS */}

        <View style={styles.filters}>

          <Pressable
            style={({ hovered }) => [
              styles.searchButton,
              hovered && styles.buttonHover,
            ]}
          >
            <Ionicons
              name="search-outline"
              size={27}
              color="#151515"
            />
          </Pressable>

          <Pressable
            style={({ hovered }) => [
              styles.directButton,
              hovered && styles.buttonHover,
            ]}
          >
            <Text style={styles.directText}>
              Direct Message
            </Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                4
              </Text>
            </View>
          </Pressable>

          <Pressable
            style={({ hovered }) => [
              styles.groupButton,
              hovered && styles.buttonHover,
            ]}
          >
            <Text style={styles.groupText}>
              Group
            </Text>

            <Text style={styles.groupCount}>
              4
            </Text>
          </Pressable>

        </View>

        {/* VERTICAL MESSAGE SCROLL */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.messageScroll}
          contentContainerStyle={styles.messageContent}
        >

          {/* PINNED MESSAGES */}

          <Text style={styles.sectionTitle}>
            Pinned Message (2)
          </Text>

          <Message
            name="Phillip Franci"
            image="https://i.pravatar.cc/150?img=20"
            message="Hey, it's been a while since we've..."
            time="10:00 am"
          />

          <Message
            name="Alfredo Saris"
            image="https://i.pravatar.cc/150?img=21"
            message="Hello, Good Morning Bro!"
            time="08:00 am"
            unread={1}
          />

          {/* ALL MESSAGES */}

          <Text style={styles.sectionTitle}>
            All Message (8)
          </Text>

          <Message
            name="Jaylon Franci"
            image="https://i.pravatar.cc/150?img=22"
            message="Everything's good."
            time="08:30 am"
          />

          <Message
            name="Tatiana Dorwart"
            image="https://i.pravatar.cc/150?img=23"
            message="Okay Thanks!"
            time="06:10 am"
          />

          <Message
            name="Terry Bergson"
            image="https://i.pravatar.cc/150?img=24"
            message="Same here!"
            time="05:45 am"
          />

          <Message
            name="Design Team"
            image="https://i.pravatar.cc/150?img=25"
            message="Let's discuss the new project."
            time="Yesterday"
            unread={4}
          />

          <Message
            name="Code Tribe Group"
            image="https://i.pravatar.cc/150?img=26"
            message="Meeting starts at 09:00."
            time="Yesterday"
          />

          <Message
            name="Project Members"
            image="https://i.pravatar.cc/150?img=27"
            message="Great work everyone!"
            time="Monday"
          />

        </ScrollView>

        {/* FLOATING ADD BUTTON */}

        <Pressable
          style={({ hovered, pressed }) => [
            styles.addButton,
            (hovered || pressed) && styles.addButtonHover,
          ]}
        >
          <Ionicons
            name="add"
            size={34}
            color="#FFFFFF"
          />
        </Pressable>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: "#6856C8",
  },

  // HEADER

  header: {
    backgroundColor: "#6856C8",
    paddingTop: 25,
    paddingHorizontal: 25,
    paddingBottom: 65,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greeting: {
    color: "#DCD7F8",
    fontSize: 14,
    marginBottom: 12,
  },

  received: {
    color: "#FFFFFF",
    fontSize: 18,
  },

  count: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "600",
    textDecorationLine: "underline",
  },

  menuButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonHover: {
    opacity: 0.65,
    backgroundColor: "rgba(255,255,255,0.18)",
  },

  contactHeading: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 24,
    marginBottom: 18,
  },

  contacts: {
    gap: 16,
    paddingHorizontal: 5,
  },

  // WHITE PANEL

  panel: {
    flex: 1,
    backgroundColor: "#F7F7F8",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: -35,
    paddingTop: 20,
    overflow: "hidden",
  },

  // FILTERS

  filters: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    gap: 10,
    marginBottom: 22,
  },

  searchButton: {
    width: 43,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },

  directButton: {
    flex: 1.5,
    backgroundColor: "#F4EF80",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },

  directText: {
    color: "#151515",
    fontSize: 12,
  },

  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#252525",
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
  },

  groupButton: {
    flex: 0.9,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 9,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },

  groupText: {
    color: "#777777",
    fontSize: 12,
  },

  groupCount: {
    color: "#777777",
    fontSize: 11,
  },

  // MESSAGE LIST

  messageScroll: {
    flex: 1,
  },

  messageContent: {
    paddingHorizontal: 22,
    paddingBottom: 100,
  },

  sectionTitle: {
    color: "#171717",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
  },

  // FLOATING BUTTON

  addButton: {
    position: "absolute",
    right: 22,
    bottom: 25,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#6856C8",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },

  addButtonHover: {
    backgroundColor: "#4E3BAA",
    transform: [{ scale: 1.05 }],
  },

});