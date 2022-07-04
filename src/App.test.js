import { render, screen, within, fireEvent } from "@testing-library/react";
import App from "./App";

test("loads, displays and filters popular movies", async () => {
  render(<App />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  const movies = await screen.findAllByRole("listitem");
  expect(movies).toHaveLength(4);

  const firstMovie = within(movies[0]);

  expect(firstMovie.getByRole("heading")).toHaveTextContent(
    /doctor strange in the multiverse of madness/i
  );

  const findImg = firstMovie.getByRole("img");
  expect(findImg).toHaveAttribute(
    "alt",
    "Doctor Strange in the Multiverse of Madness"
  );

  fireEvent.click(findImg);

  expect(screen.getByRole("dialog")).toBeVisible();

  expect(
    screen.getByText(
      "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary."
    )
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
