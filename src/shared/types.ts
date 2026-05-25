export interface LayoutProps {
    children: React.ReactNode;
    addClasses?: string;
}

export interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    label: string;
    addClasses?: string;
}