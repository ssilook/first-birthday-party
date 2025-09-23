import React, { useState, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


function Practice() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // 'count'가 변경될 때만 복잡한 연산을 수행합니다.
    const complexCalculation = useMemo(() => {
        console.log('복잡한 계산 수행...');
        // count와 관련된 무거운 계산이라고 가정
        return count * 2;
    }, [count]);

    // 'count'가 변경될 때만 함수를 재생성합니다.
    const handleClick = useCallback(() => {
        console.log(`현재 카운트는 ${count} 입니다.`);
    }, [count]);


    return (
      <div>
        <p>You clicked {count} times</p>

        <p>결과: {complexCalculation}</p>
        <Button onClick={() => setCount(count + 1)}>카운트 증가</Button>
        <br />
        <Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        {/* text만 변경될 때는 handleClick 함수가 재생성되지 않습니다. */}
        <Button onClick={handleClick}>현재 카운트 로그</Button>
      </div>
    );
}

export default Practice