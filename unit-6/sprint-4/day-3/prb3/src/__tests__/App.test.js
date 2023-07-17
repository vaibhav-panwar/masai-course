import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import users from "./users.json";
import usersAsc from "./usersAsc.json";
import usersDesc from "./usersDesc.json";

import App from "../App";
import UserDetails from "../components/UserDetails";
describe("Testing User Deatils display App", () => {
  global.score = 1;
  console.log("Resetting score to 1");
  describe("App component should render", () => {
    beforeEach(() => {
      render(<App />);
    });
    it("should have basic structure", async () => {
      expect(screen.getByTestId("app")).toBeInTheDocument();
      expect(screen.getByTestId("sort-asc-btn")).toBeInTheDocument();
      expect(screen.getByTestId("sort-desc-btn")).toBeInTheDocument();
      expect(screen.getAllByTestId("user-container")).toBeTruthy();
      expect(screen.getAllByTestId("user-fname")).toBeTruthy();
      expect(screen.getAllByTestId("user-lname")).toBeTruthy();
      expect(screen.getAllByTestId("user-address")).toBeTruthy();
      expect(screen.getAllByTestId("user-karma")).toBeTruthy();
      expect(screen.getAllByTestId("user-address")).toBeTruthy();
      expect(screen.getAllByTestId("follow-btn")).toBeTruthy();
      global.score += 1;
    });
    it("should render UserDetails component with Props", () => {
      cleanup();
      let props = {
        id: 2,
        avatar: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
        first_name: "Alf",
        last_name: "Sexty",
        address: "43766 Mallory Place",
        karma: 57005,
        followers: 97350,
        posts: 930,
        is_following: false,
      };
      let { getAllByTestId, getByTestId } = render(<UserDetails {...props} />);
      let userDetails = getByTestId("user-container");
      let followBtn = getByTestId("follow-btn");
      expect(userDetails).toHaveTextContent(props.first_name);
      expect(userDetails).toHaveTextContent(props.first_name);
      expect(userDetails).toHaveTextContent(props.last_name);
      expect(userDetails).toHaveTextContent(props.posts);
      expect(userDetails).toHaveTextContent(props.karma);
      expect(followBtn).toHaveTextContent(
        props.is_following ? "Unfollow" : "Follow"
      );
      expect(userDetails).toHaveTextContent(props.address);
      global.score += 2;
    });
    it("should display all users", () => {
      let userDetails = screen.getAllByTestId("user-container");
      let followBtns = screen.getAllByTestId("follow-btn");
      expect(userDetails.length).toBe(50);
      let i = 0;
      userDetails.forEach((user) => {
        expect(user).toHaveTextContent(users[i].first_name);
        expect(user).toHaveTextContent(users[i].last_name);
        expect(user).toHaveTextContent(users[i].posts);
        expect(user).toHaveTextContent(users[i].karma);
        expect(followBtns[i]).toHaveTextContent(
          users[i].is_following ? "Unfollow" : "Follow"
        );
        expect(user).toHaveTextContent(users[i++].address);
      });
      global.score += 2;
    });

    it("should sort  users by first_name in ascending order", () => {
      fireEvent.click(screen.getByTestId("sort-asc-btn"));
      let followBtns = screen.getAllByTestId("follow-btn");
      let userData = screen.getAllByTestId("user-container");
      let i = 0;
      userData.forEach((user) => {
        expect(user).toHaveTextContent(usersAsc[i].first_name);
        expect(user).toHaveTextContent(usersAsc[i].last_name);
        expect(user).toHaveTextContent(usersAsc[i].posts);
        expect(user).toHaveTextContent(usersAsc[i].karma);
        expect(followBtns[i]).toHaveTextContent(
          usersAsc[i].is_following ? "Unfollow" : "Follow"
        );
        expect(user).toHaveTextContent(usersAsc[i++].address);
      });
      global.score += 2;
    });

    it("should sort users by first_name  in descnding order", () => {
      fireEvent.click(screen.getByTestId("sort-desc-btn"));
      let userData = screen.getAllByTestId("user-container");
      let followBtns = screen.getAllByTestId("follow-btn");
      let i = 0;
      userData.forEach((user) => {
        expect(user).toHaveTextContent(usersDesc[i].first_name);
        expect(user).toHaveTextContent(usersDesc[i].last_name);
        expect(user).toHaveTextContent(usersDesc[i].posts);
        expect(user).toHaveTextContent(usersDesc[i].karma);
        expect(followBtns[i]).toHaveTextContent(
          usersDesc[i].is_following ? "Unfollow" : "Follow"
        );
        expect(user).toHaveTextContent(usersDesc[i++].address);
      });
      global.score += 2;
    });
  });
  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
