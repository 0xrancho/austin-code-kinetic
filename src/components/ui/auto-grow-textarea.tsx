import * as React from "react"

import { cn } from "@/lib/utils"

const AutoGrowTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const combinedRef = ref || textareaRef;

  const adjustHeight = React.useCallback(() => {
    const textarea = typeof combinedRef === 'function' ? textareaRef.current : combinedRef?.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  }, [combinedRef]);

  React.useEffect(() => {
    adjustHeight();
  }, [props.value, adjustHeight]);

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    if (props.onInput) {
      props.onInput(e);
    }
  };

  return (
    <textarea
      className={cn(
        "flex min-h-[44px] w-full rounded-md px-3 py-2 text-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none overflow-hidden",
        className
      )}
      ref={combinedRef}
      onInput={handleInput}
      {...props}
    />
  )
})
AutoGrowTextarea.displayName = "AutoGrowTextarea"

export { AutoGrowTextarea }