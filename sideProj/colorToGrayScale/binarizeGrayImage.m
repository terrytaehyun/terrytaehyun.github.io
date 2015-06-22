function [binarizedImage] = binarizeGrayImage(image)
	binarizedImage = ones(size(image));
    threshold = 128;
    
    for i=1:size(image, 1)
        for j=1:size(image, 2)
            if image(i,j) < threshold
                binarizedImage(i,j) = 0;
            end
        end
    end
end



