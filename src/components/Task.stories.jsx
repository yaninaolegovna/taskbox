import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ display: 'flex', flexDirection: 'column' }}><Story /></div>],
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
  story: {
    name: 'Default',
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
  story: {
    name: 'Pinned',
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
  story: {
    name: 'Archived',
  },
};

export const Priority = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PRIORITY',
    },
  },
  story: {
    name: 'Priority',
  },
};

export const Progress = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PROGRESS',
    },
  },
  story: {
    name: 'Progress',
  },
};

export const Overdue = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_OVERDUE',
    },
  },
  story: {
    name: 'Overdue',
  },
};

export const AllStates = () => (
  <>
    <Label>Default</Label>
    <DefaultComponent {...Default.args} />

    <StyledHr />

    <StyledLabel>Pinned</StyledLabel>
    <PinnedComponent {...Pinned.args} />

    <StyledHr />

    <StyledLabel>Archived</StyledLabel>
    <ArchivedComponent {...Archived.args} />

    <StyledHr />

    <StyledLabel>Priority</StyledLabel>
    <DefaultComponent {...Priority.args} />

    <StyledHr />

    <StyledLabel>Progress</StyledLabel>
    <PinnedComponent {...Progress.args} />

    <StyledHr />

    <StyledLabel>Overdue</StyledLabel>
    <ArchivedComponent {...Overdue.args} />
  </>
);

const DefaultComponent = (args) => <Task {...args} />;
const PinnedComponent = (args) => <Task {...args} />;
const ArchivedComponent = (args) => <Task {...args} />;

const Label = ({ children }) => (
  <h3 style={{ margin: '0 0 10px 0', color: 'white' }}>{children}</h3>
);

const StyledLabel = ({ children }) => (
  <h3 style={{ marginTop: '10px', marginBottom: '10px', color: 'white' }}>{children}</h3>
);

const StyledHr = () => (
  <hr style={{ margin: '10px 0', height: '0', border: 'none', borderTop: '2px dashed #fff' }} />
);