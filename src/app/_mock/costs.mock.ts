import { Cost } from '../_model/cost';
import { CostEnum } from '../_model/costs.enum';

export const COSTS: Cost[] = [
    {
        title: CostEnum.Wood,
        val: 0,
        isActive: false
    },
    {
        title: CostEnum.Food,
        val: 0,
        isActive: false
    },
    {
        title: CostEnum.Gold,
        val: 0,
        isActive: false
    }
]