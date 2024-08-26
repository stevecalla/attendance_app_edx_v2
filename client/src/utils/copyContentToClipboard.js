export async function copyContentToClipboard(content, setTargetClickedIndex, index, setIsDisabled) {
  try {
    // Copy the content to the clipboard
    await navigator.clipboard.writeText(content);

    // Set the targetClickedIndex to true to indicate success
    setTargetClickedIndex(index);
    setIsDisabled(true);

    // Reset the state after 2 seconds
    setTimeout(() => {
      typeof index === 'boolean' ? setTargetClickedIndex(false) :
        setTargetClickedIndex(null);
      setIsDisabled(false);
    }, 2000);

  } catch (error) {
    console.error('Failed to copy content to clipboard:', error);
  }

}
