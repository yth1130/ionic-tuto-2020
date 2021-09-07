import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

const InputControl: React.FC<{
    selectedValue: "mkg" | "ftlbs";
    onSelectValue: (value: "mkg" | "ftlbs") => void;
}> = (props) => {
    // const inputChangeHandler = (event: CustomEvent) => {
    //     props.onSelectValue(event.detail.value)
    // }
    return (
        <IonSegment
            value={props.selectedValue}
            onIonChange={(e: CustomEvent) => props.onSelectValue(e.detail.value)}
        >
            <IonSegmentButton value="mkg">
                <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;
