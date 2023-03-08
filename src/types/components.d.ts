interface SelectorOption {
  value: string;
  text: string;
}

interface ComponentProps<T> {
  label: string;
  value: T;
  setValue: (value: T) => void;
  isDisabled?: boolean;
  tooltip?: string;
}
