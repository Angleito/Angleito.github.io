---
name: QwenSuiCoder
description: >-
  End-to-end LLM Benchmarking & Training Framework for Sui blockchain
  development
tech_stack:
  - Python
  - DeepSpeed
  - Qwen 2.5
  - MLOps
  - PyTorch
github: https://github.com/Angleito/qwensuicoder
private_full_version: false
contact: arainey555@gmail.com
features:
  - Hardware-aware model selection
  - Automated benchmarking (0.5B to 14B parameters)
  - Smart parameter selection
  - DeepSpeed-optimized training with ZeRO optimization
  - Progressive quantization testing
---

## QwenSuiCoder: Automated LLM Benchmarking & Training Framework

This project is an end-to-end solution for benchmarking, optimizing, and fine-tuning large language models (specifically Qwen 2.5 models) specialized for Sui blockchain development. It's designed to intelligently determine the optimal model size, quantization level, and context length that your hardware can efficiently handle.

### Core Components

1. **Automated Benchmarking** (`benchmark_models.py`):
   - Tests various model sizes (0.5B to 14B parameters) with different quantization techniques (FP16, 8-bit, 4-bit)
   - Measures VRAM usage, loading times, and inference capabilities
   - Identifies the largest model your hardware can run efficiently
   - Outputs detailed metrics in JSON format for further analysis

2. **Smart Parameter Selection** (`run_benchmarks.sh`):
   - Orchestrates the benchmarking process
   - Analyzes results to determine optimal:
     - Model size (e.g., Qwen 2.5 7B vs 14B)
     - Quantization level (FP16, 8-bit, 4-bit)
     - Context length (based on VRAM constraints)
   - Generates a customized training script with optimized parameters

3. **DeepSpeed-Optimized Training** (`optimized_training.py`):
   - Implements efficient training using DeepSpeed's ZeRO optimization stages
   - Supports gradient accumulation, mixed-precision training, and CPU offloading
   - Configures memory-efficient training based on benchmark results
   - Saves trained models with standardized naming conventions

### Technical Innovations

1. **Hardware-Aware Model Selection**: Automatically selects the largest model that fits within available VRAM, rather than requiring manual trial and error.

2. **Progressive Quantization Testing**: Tests models with decreasing precision (FP16 → 8-bit → 4-bit) to find the optimal balance between model size and performance.

3. **Robust Error Handling**: Incorporates fallback mechanisms to ensure the pipeline continues even if certain benchmarking steps fail.

4. **Efficient Resource Utilization**: Configures DeepSpeed parameters (ZeRO stages, offloading, etc.) based on hardware constraints for maximum throughput.

### Note

This project is now publicly available on GitHub. You can view the code repository at [https://github.com/Angleito/qwensuicoder](https://github.com/Angleito/qwensuicoder). For any questions or collaborations, feel free to contact me at arainey555@gmail.com. 

