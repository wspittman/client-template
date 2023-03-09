import { Input } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Search, XCircle } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({
  onChange,
  onSubmit,
  placeholder = 'Search...',
}: Props): JSX.Element => {
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (onSubmit) onSubmit(searchText.trim());
        }}
      >
        <Input
          value={searchText}
          autoComplete="off"
          placeholder={placeholder}
          inputProps={{
            role: 'searchbox',
            'aria-label': 'search',
            name: 'text',
          }}
          startAdornment={<Search />}
          endAdornment={
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: searchText ? 'visible' : 'hidden' }}
              onClick={() => {
                setSearchText('');
                if (onChange) onChange('');
              }}
            >
              <XCircle />
            </IconButton>
          }
          fullWidth
          onChange={(e) => {
            setSearchText(e.target.value);
            if (onChange) onChange(e.target.value);
          }}
        />
      </form>
    </>
  );
};
