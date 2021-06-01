import classes from './Overlay.module.css';

interface LeftOverlayProps {
  selectedIndex: number;
  valuesCount: number;
}

function LeftOverlay(props: LeftOverlayProps) {
  return(
    <div
      className={classes.Overlay}
      style={{
        width: `${100/props.valuesCount}%`,
        transform: `translateX(${props.selectedIndex * 100}%)`,
      }}
    />
  );
}

export default LeftOverlay;
