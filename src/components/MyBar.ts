import { Bar } from 'vue-chartjs';
import { HorizontalBar } from 'vue-chartjs';

export default {
    extends: HorizontalBar,
    mounted () {
        // Overwriting base render method with actual data.
        this.renderChart({
            labels: ['중대온도','1중대', '2중대', '3중대'],
            datasets: [
                {
                    label: '중대 온도 (℃)',
                    backgroundColor: 'red',
                    data: [0,24, 22, 23, 21, 24, 23, 20, 25]
                }
            ]
        })
    }
}