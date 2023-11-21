<?php
function generator($n)
{
    for ($i = 1; $i <= $n; $i++) {
        if ($i % 3 == 0 && $i % 5 == 0) {
            yield "HelloWorld";
        } elseif ($i % 3 == 0) {
            yield "Hello";
        } elseif ($i % 5 == 0) {
            yield "World";
        } else {
            yield $i;
        }
    }
}

// Gunakan generator
foreach (generator(63) as $value) {
    echo $value . PHP_EOL;
}
