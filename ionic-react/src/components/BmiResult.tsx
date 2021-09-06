import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";

const BmiResult: React.FC<{ result: number }> = props => {
    return (
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent className="ion-text-center">
                        <h2>Your Body-Mass-Index</h2>
                        <h1>{props.result.toFixed(2)}</h1>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    );
};

export default BmiResult;