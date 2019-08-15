import { Button, Text } from 'react-native';
import React, { useState } from 'react';

export const Counter: React.SFC = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Text>{count}</Text>
            <Button title="increment" onPress={() => setCount(count + 1)} />
        </>
    )
}