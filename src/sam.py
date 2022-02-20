# Program to multiply two matrices using nested loops

# take a 3x3 matrix
A = [[1, 2],[ 3,4]]
B = [[5, 6],[ 7,8]]
C = [[9, 10],[ 11,12]]
# take a 3x4 matrix

# iterating by row of A


def my_function(A, B, C):
    result = [[0,0], [0,0]]
#   resultF = [[0, 0, 0, 0],
    resultF = [[0,0], [0,0]]
        
    for i in range(len(A)):

    # iterating by column by B
        for j in range(len(B[0])):

        # iterating by rows of B
            for k in range(len(B)):
                result[i][j] += A[i][k] * B[k][j]

    for i in range(len(result)):

      # iterating by column by B
        for j in range(len(C[0])):

          # iterating by rows of B
            for k in range(len(C)):
                resultF[i][j] += result[i][k] * C[k][j]
    return resultF

print(my_function(A, B, C))