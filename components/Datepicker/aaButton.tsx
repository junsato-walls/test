import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

interface ButtonProps {
  /**
   * ボタンの大きさの設定
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * ボタンに表示する文字
   */
  label: string;
    /**
   * 先頭にアイコンの設置。MUI IconをImportして設定する。
   */
  startIcon?: React.ReactNode
    /**
   * 最後にアイコンの設置。MUI IconをImportして設定する。
   */
  endIcon?: React.ReactNode
    /**
   * クリック時の動作
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Buttonn = ({
  size = 'medium',
  label = 'Test',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  return (
    <>    
    <Button 
    size={size}
    variant="outlined"
    startIcon={startIcon}
    endIcon={endIcon}
    {...props}
    >
    {label}
    </Button>
    </>    
  );
};
