/**
 * 🎯 배열 중복 제거 최적화 문제
 * 
 * 문제 설명:
 * 1. 주어진 5가지 중복 제거 함수들 중에서 문제가 있는 것들을 찾아 수정하세요
 * 2. 각 함수의 시간복잡도를 분석하고 최적화하세요
 * 3. 특별한 케이스들(빈 배열, null, undefined, 객체 배열 등)을 처리하세요
 * 
 * 실행 방법:
 * 1. 이 파일을 VSCode에 붙여넣기
 * 2. Node.js 환경에서 실행: node filename.js
 * 3. 또는 브라우저 콘솔에서 실행
 */

// ===== 테스트 데이터 =====
const testCases = [
    // 기본 케이스
    [1, 2, 2, 3, 4, 4, 5],
    
    // 문자열 케이스
    ['apple', 'banana', 'apple', 'cherry', 'banana'],
    
    // 빈 배열
    [],
    
    // 단일 요소
    [42],
    
    // 모두 같은 요소
    [1, 1, 1, 1],
    
    // 객체 배열 (까다로운 케이스!)
    [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 1, name: 'John' },
        { id: 3, name: 'Bob' }
    ],
    
    // null, undefined 포함
    [1, null, 2, undefined, null, 3, undefined, 1],
    
    // 대용량 데이터 (성능 테스트용)
    Array.from({ length: 10000 }, (_, i) => Math.floor(i / 2))
];

// ===== 문제가 있는 함수들 - 찾아서 수정하세요! =====

/**
 * 방법 1: indexOf를 이용한 필터링
 * 🤔 이 함수에 문제가 있나요? 어떤 시간복잡도를 가지나요?
 */
function removeDuplicates1(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

/**
 * 방법 2: Set을 이용한 중복 제거
 * 🤔 가장 빠를 것 같지만... 모든 케이스에서 올바르게 동작할까요?
 */
function removeDuplicates2(arr) {
    return [...new Set(arr)];
}

/**
 * 방법 3: reduce를 이용한 누적
 * 🚨 이 함수는 심각한 성능 문제가 있습니다!
 */
function removeDuplicates3(arr) {
    return arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            return [...acc, item];  // 🚨 매번 새 배열 생성!
        }
        return acc;
    }, []);
}

/**
 * 방법 4: 객체를 HashMap으로 활용
 * 🤔 객체가 포함된 배열에서는 어떻게 동작할까요?
 */
function removeDuplicates4(arr) {
    const seen = {};
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    
    return result;
}

/**
 * 방법 5: Map을 이용한 최적화
 * 🤔 Map이 Object보다 항상 나을까요?
 */
function removeDuplicates5(arr) {
    const seen = new Map();
    const result = [];
    
    for (const item of arr) {
        if (!seen.has(item)) {
            seen.set(item, true);
            result.push(item);
        }
    }
    
    return result;
}

// ===== 추가 과제: 객체 배열 전용 함수 =====

/**
 * 🎯 과제: 객체 배열에서 특정 키로 중복 제거하는 함수를 만드세요
 * 예: removeObjectDuplicates([{id:1, name:'A'}, {id:2, name:'B'}, {id:1, name:'C'}], 'id')
 * 결과: [{id:1, name:'A'}, {id:2, name:'B'}] (첫 번째 것만 유지)
 */
function removeObjectDuplicates(arr, key) {
    // 🤔 여기를 구현해보세요!
    // 힌트: Map이나 Set을 활용해보세요
}

// ===== 성능 측정 함수 =====
function measurePerformance(func, data, testName) {
    const start = performance.now();
    let result;
    
    try {
        result = func([...data]); // 원본 배열 보호
        const end = performance.now();
        
        console.log(`${testName}:`);
        console.log(`  실행 시간: ${(end - start).toFixed(4)}ms`);
        console.log(`  결과 길이: ${result.length}`);
        console.log(`  원본 길이: ${data.length}`);
        console.log(`  중복 제거됨: ${data.length - result.length}개`);
        
        return { success: true, time: end - start, result };
    } catch (error) {
        console.log(`${testName}: ❌ 에러 발생 - ${error.message}`);
        return { success: false, error: error.message };
    }
}

// ===== 정확성 검증 함수 =====
function validateResult(original, deduplicated, testName) {
    // 기본 검증
    if (deduplicated.length > original.length) {
        console.log(`❌ ${testName}: 결과가 원본보다 길어짐!`);
        return false;
    }
    
    // 중복 검사 (간단한 케이스만)
    if (typeof deduplicated[0] !== 'object') {
        const hasDuplicates = deduplicated.some((item, index) => 
            deduplicated.indexOf(item) !== index
        );
        
        if (hasDuplicates) {
            console.log(`❌ ${testName}: 아직 중복이 남아있음!`);
            return false;
        }
    }
    
    console.log(`✅ ${testName}: 검증 통과`);
    return true;
}

// ===== 메인 테스트 실행 =====
function runTests() {
    console.log('🚀 배열 중복 제거 성능 & 정확성 테스트\n');
    
    const functions = [
        { name: 'indexOf 필터링', func: removeDuplicates1 },
        { name: 'Set 활용', func: removeDuplicates2 },
        { name: 'reduce 누적', func: removeDuplicates3 },
        { name: 'Object HashMap', func: removeDuplicates4 },
        { name: 'Map 활용', func: removeDuplicates5 }
    ];
    
    // 각 테스트 케이스별로 실행
    testCases.forEach((testCase, caseIndex) => {
        console.log(`\n📊 테스트 케이스 ${caseIndex + 1}:`);
        console.log(`입력: ${Array.isArray(testCase[0]) && typeof testCase[0] === 'object' 
            ? '[객체 배열]' 
            : JSON.stringify(testCase).slice(0, 50)}${testCase.length > 10 ? '...' : ''}`);
        console.log(`길이: ${testCase.length}`);
        console.log('─'.repeat(50));
        
        functions.forEach(({ name, func }) => {
            const result = measurePerformance(func, testCase, name);
            
            if (result.success) {
                validateResult(testCase, result.result, name);
            }
        });
    });
    
    // 대용량 데이터 성능 비교
    console.log('\n🔥 대용량 데이터 성능 비교 (10,000개 요소)');
    console.log('='.repeat(60));
    
    const largeData = testCases[testCases.length - 1];
    const performanceResults = [];
    
    functions.forEach(({ name, func }) => {
        const result = measurePerformance(func, largeData, name);
        if (result.success) {
            performanceResults.push({ name, time: result.time });
        }
    });
    
    // 성능 순위 출력
    performanceResults.sort((a, b) => a.time - b.time);
    console.log('\n🏆 성능 순위:');
    performanceResults.forEach((result, index) => {
        console.log(`${index + 1}위: ${result.name} (${result.time.toFixed(4)}ms)`);
    });
}

// ===== 추가 도전 과제 =====

/**
 * 🎯 도전 과제 1: 깊은 비교 중복 제거
 * 객체나 배열의 내용이 같으면 중복으로 처리하는 함수를 만드세요
 * 
 * 예시:
 * input: [{a:1}, {b:2}, {a:1}]
 * output: [{a:1}, {b:2}]
 */
function deepRemoveDuplicates(arr) {
    // 🤔 여기를 구현해보세요!
    // 힌트: JSON.stringify()를 써볼까요? 하지만 함정이 있을 수 있어요...
}

/**
 * 🎯 도전 과제 2: 커스텀 비교 함수
 * 사용자가 정의한 비교 함수로 중복을 판단하는 함수를 만드세요
 * 
 * 예시:
 * removeDuplicatesBy([{id:1,name:'A'}, {id:2,name:'B'}, {id:1,name:'C'}], 
 *                    (a,b) => a.id === b.id)
 */
function removeDuplicatesBy(arr, compareFn) {
    // 🤔 여기를 구현해보세요!
}

// ===== 실행 =====
console.log('배열 중복 제거 최적화 문제를 시작합니다!\n');
console.log('🔍 각 함수의 문제점을 찾아보세요:');
console.log('1. 성능 문제 (시간복잡도)');
console.log('2. 특수 케이스 처리 문제');
console.log('3. 타입별 처리 문제');
console.log('\n정답이 궁금하면 "정답을 줘"라고 요청하세요!\n');

// 테스트 실행
runTests();

/**
 * 💡 생각해볼 질문들:
 * 
 * 1. removeDuplicates3에서 [...acc, item] 대신 acc.push(item)을 쓰면?
 * 2. null과 undefined가 섞인 배열에서 각 방법은 어떻게 동작할까?
 * 3. 객체 배열에서 Set과 Map의 동작 차이는?
 * 4. 대용량 데이터에서 가장 빠른 방법은?
 * 5. 메모리 사용량은 어떨까?
 * 
 * 🎯 추가 미션:
 * - TypeScript 타입 정의 추가해보기
 * - React 환경에서 useMemo로 최적화해보기
 * - Web Worker에서 대용량 데이터 처리해보기
 */