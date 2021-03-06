import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as TaskListStories from "./TaskList.stories"; //π  Our stories imported here

//π composeStories will process all information related to the component (e.g., args)
const { WithPinnedTasks } = composeStories(TaskListStories);

it("renders pinned tasks at the start of the list", () => {
  const { container } = render(<WithPinnedTasks />);

  // λ§¨ λ§μ§λ§ task μΈ 6λ² task κ° λ§μ§λ§μ΄ μλ λ§¨μμ μ€κΈ°λ₯Ό ν¬λ§νλ€.
  expect(
    container.querySelector(
      '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
    )
  ).not.toBe(null);
});