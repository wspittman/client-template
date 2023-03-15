import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { DateSelector } from './components/DateSelector';
import { SearchBar } from './components/SearchBar';
import { Selector } from './components/Selector';
import { Toggle } from './components/Toggle';
import { Header } from './frame/Header';

const exampleSelections = [
  { value: '1', text: 'One' },
  { value: '2', text: 'Two' },
  { value: '3', text: 'Three' },
];

export function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const [toggleValue, setToggleValue] = useState(false);
  const [selectorValue, setSelectorValue] = useState(
    exampleSelections[0].value
  );
  const [dateSelectorValue, setDateSelectorValue] = useState<Dayjs | null>(
    null
  );

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        margin: '-8px',
      }}
    >
      <Header />

      <Typography variant="h1">Vite + React</Typography>
      <div>
        <Button
          variant="outlined"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </Button>
        <Typography>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </div>
      <Typography>Click on the Vite and React logos to learn more</Typography>

      <Toggle
        label="Toggle Example"
        tooltip="Toggle tooltip example"
        value={toggleValue}
        setValue={setToggleValue}
      />

      <Selector
        label="Selector Example"
        tooltip="Selector tooltip example"
        value={selectorValue}
        setValue={setSelectorValue}
        options={exampleSelections}
      />

      <DateSelector
        label="Date Selector Example"
        tooltip="Date Selector tooltip example"
        value={dateSelectorValue}
        setValue={setDateSelectorValue}
      />

      <SearchBar placeholder="Search Bar Example" />
    </Box>
  );
}
